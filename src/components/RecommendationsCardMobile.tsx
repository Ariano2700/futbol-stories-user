import type { NewsWithAuthorI } from "src/interfaces/news/newsInterface";
import { useRecommendationsStore } from "src/store/recommendations/recommendations.store";
import convertCreatedAtToMonthYear from "src/utils/convertCreatedAtToMonthYear";
import formatTitleForUrl from "src/utils/formatTitleForUrl";

function RecommendationsCardMobile({
  principalNote,
  recommendationIndex,
}: {
  principalNote: NewsWithAuthorI;
  recommendationIndex: number;
}) {
  const { recommendations, loading } = useRecommendationsStore();

  const selectedRecommendation = recommendations[recommendationIndex];

  if (loading) {
    return (
      <aside
        className={`mt-3 border border-slate-300 h-full lg:hidden w-full py-4 px-10 rounded-lg flex items-center justify-start ${
          principalNote.isPeruvian ? "bg-red-100" : "bg-blue-100"
        }`}
      >
        <div className="w-full p-2 flex flex-col items-center justify-center gap-5">
          <p className="montserrat-alternates-medium text-lg sm:text-xl">
            Obteniendo las mejores recomendaciones para usted 😉
          </p>
          <span className="animate-spin">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 64 64"
            >
              <path
                fill="#e6e7e8"
                d="M57.55 14.458c9.692 14.11 6.112 33.406-7.999 43.09c-14.11 9.693-33.406 6.112-43.1-8c-9.694-14.11-6.111-33.406 8-43.1c14.11-9.691 33.406-6.109 43.09 8"
              />
              <path
                fill="#404041"
                d="m35.294 42.546l-12.836 1.429L14.8 33.576l5.182-11.83l12.838-1.432l7.657 10.404zM61.276 23.2a31 31 0 0 0-4.22-8.975a30.8 30.8 0 0 0-10.478-9.504L42.5 14.037l7.657 10.402l11.118-1.24M18.481 11.735l3.986-9.104A30.97 30.97 0 0 0 7.14 13.183l11.233-1.25c.038-.068.068-.133.108-.198m34.153 31.161l-5.18 11.831l2.012 2.732c.023-.02.053-.03.08-.05c5.699-3.912 9.646-9.406 11.723-15.478l-8.64.963M7.148 39.659l-5.107.57c1.666 6.327 5.278 11.81 10.122 15.863l2.641-6.03z"
              />
            </svg>
          </span>
        </div>
      </aside>
    );
  }

  if (!selectedRecommendation) {
    return null; // No hay más recomendaciones para mostrar
  }

  const { month: urlMonth, year: urlYear } = convertCreatedAtToMonthYear(
    selectedRecommendation.createdAt
  );
  return (
    <a
      className="lg:hidden block"
      href={`/notas/${urlMonth}/${urlYear}/${formatTitleForUrl(
        selectedRecommendation.title
      )}/${selectedRecommendation.id}`}
    >
      <aside
        key={selectedRecommendation.id}
        className={`mt-3 border border-slate-300 w-full py-4 px-10 rounded-lg flex flex-col items-center justify-start gap-5 ${
          principalNote.isPeruvian ? "bg-red-50" : "bg-blue-50"
        } sm:flex-row`}
      >
        <h4 className="text-primary-20 montserrat-medium block sm:hidden">
          Nuestra recomendación
        </h4>
        <img
          src={selectedRecommendation.images.find((img) => img.mainImage)?.url}
          alt={`Imagen destacada de ${selectedRecommendation.title}`}
          className="w-full h-28 sm:size-[120px] object-cover rounded-sm"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-primary-20 montserrat-medium hidden sm:block">
            Nuestra recomendación
          </h4>
          <h3 className="montserrat-alternates-semibold text-base sm:text-xl">
            {selectedRecommendation.title}
          </h3>
        </div>
      </aside>
    </a>
  );
}

export default RecommendationsCardMobile;
