import { useEffect, useState } from "react";
import type { NewsWithAuthorI } from "src/interfaces/news/newsInterface";
import getRecommendationsWithLatestNotes from "src/service/getRecommendationsWithLatestNotes";
import { useRecommendationsStore } from "src/store/recommendations/recommendations.store";
import convertCreatedAtToMonthYear from "src/utils/convertCreatedAtToMonthYear";
import formatTitleForUrl from "src/utils/formatTitleForUrl";

function RecommendationsCard({
  principalNote,
}: {
  principalNote: NewsWithAuthorI;
}) {
  const {
    recommendations,
    setRecommendations,
    loading,
    setLoading,
    setPrevNews,
    setPrevStories,
  } = useRecommendationsStore();

  const fetchData = async () => {
    const { filteredPreviousNews, filteredPreviousStories, notes } =
      await getRecommendationsWithLatestNotes({
        principalNote,
      });
    const ourRecommendations = principalNote.isStory
      ? [...notes, ...filteredPreviousStories]
      : [...notes, ...filteredPreviousNews];
    setRecommendations(ourRecommendations);
    setPrevNews(filteredPreviousNews);
    setPrevStories(filteredPreviousStories);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <aside className="hidden lg:w-[305px] lg:min-h-[700px] p-4 lg:flex items-start justify-center bg-white rounded-lg">
      <div className="flex flex-col w-full h-full">
        <h4 className="uppercase montserrat-bold text-xl">
          Nuestras recomendaciones
        </h4>
        <hr className="border border-primary-20 mb-3" />
        {loading ? (
          <div className="w-full p-2 flex flex-col items-center justify-center gap-5">
            <p className="montserrat-alternates-medium text-xl">
              Obteniendo las mejores recomendaciones para usted 😉
            </p>
            <span className="animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
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
        ) : (
          <ul className="w-full list-disc grid grid-cols-1 gap-5 p-4">
            {recommendations.map((note, i) => {
              const { month: urlMonth, year: urlYear } =
                convertCreatedAtToMonthYear(note.createdAt);
              return (
                <li key={i}>
                  <article
                    className="montserrat-alternates-semibold text-base"
                    aria-labelledby={`note-title-${i}`}
                  >
                    <a
                      className="flex flex-col items-center gap-1"
                      href={`/notas/${urlMonth}/${urlYear}/${formatTitleForUrl(
                        note.title
                      )}/${note.id}`}
                    >
                      <h3
                        id={`note-title-${i}`}
                        className="text-lg font-semibold underline decoration-transparent hover:decoration-current transition-all"
                      >
                        {note.title}
                      </h3>
                      <figure className="mt-2">
                        <img
                          src={note.images.find((img) => img.mainImage)?.url}
                          alt={`Imagen destacada de ${note.title}`}
                          className="w-full h-28 sm:h-[120px] object-cover rounded-sm"
                        />
                        <figcaption className="sr-only">
                          Imagen destacada de la nota titulada {note.title}.
                        </figcaption>
                      </figure>
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}
export default RecommendationsCard;
