import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

type Offer = {
  id: number;
  key: string;
  rating: string;
  price: string;
  image: string;
  tagKeys: string[];
};

const offers: Offer[] = [
  {
    id: 1,
    key: "item1",
    rating: "4.7/5",
    price: "3,450 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2FThailand45.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2", "tag3"],
  },
  {
    id: 2,
    key: "item2",
    rating: "4.6/5",
    price: "3,200 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fvietnam.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 3,
    key: "item3",
    rating: "4.5/5",
    price: "3,980 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fpoland.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 4,
    key: "item4",
    rating: "4.9/5",
    price: "5,950 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fmaldives.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 5,
    key: "item5",
    rating: "4.4/5",
    price: "4,150 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Frussia.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 6,
    key: "item6",
    rating: "4.7/5",
    price: "2,950 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fazerbaijan.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 7,
    key: "item7",
    rating: "4.8/5",
    price: "3,180 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fgeorgia.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 8,
    key: "item8",
    rating: "4.9/5",
    price: "6,500 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fswitzerland.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 9,
    key: "item9",
    rating: "4.6/5",
    price: "2,780 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fturkey.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 10,
    key: "item10",
    rating: "4.8/5",
    price: "4,280 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Findonesia.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 11,
    key: "item11",
    rating: "4.7/5",
    price: "5,400 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Ffrance.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
  {
    id: 12,
    key: "item12",
    rating: "4.5/5",
    price: "4,760 SAR",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fspain.jpg&w=2048&q=75",
    tagKeys: ["tag1", "tag2"],
  },
];

const destinationKeys = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
];

export const ExclusiveOffersPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-extrabold tracking-tight md:text-5xl">
            {t("exclusiveOffers.hero.title")}
          </h1>
          <p className="text-white/80 text-base mt-4 md:text-lg">
            {t("exclusiveOffers.hero.description")}
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr] md:gap-8">
            <aside className="bg-slate-900 border border-slate-800 shadow-card rounded-2xl p-5 h-fit sticky top-28">
              <h2 className="text-slate-50 text-xl font-extrabold tracking-tight mb-5">
                {t("exclusiveOffers.filter.title")}
              </h2>

              <div className="border-b border-slate-800 pb-5 mb-5">
                <h3 className="text-slate-50 text-sm font-semibold mb-3">
                  {t("exclusiveOffers.filter.budget")}
                </h3>
                <div className="flex items-center justify-between text-slate-300 text-sm mb-3">
                  <span>{t("exclusiveOffers.filter.budgetMin")}</span>
                  <span>{t("exclusiveOffers.filter.budgetMax")}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  defaultValue="5500"
                  className="w-full"
                />
              </div>

              <div className="border-b border-slate-800 pb-5 mb-5">
                <h3 className="text-slate-50 text-sm font-semibold mb-3">
                  {t("exclusiveOffers.filter.starRating")}
                </h3>
                <div className="space-y-2 text-sm text-slate-100">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.stars5")}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.stars4")}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.stars3")}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.noRating")}
                  </label>
                </div>
              </div>

              <div className="border-b border-slate-800 pb-5 mb-5">
                <h3 className="text-slate-50 text-sm font-semibold mb-3">
                  {t("exclusiveOffers.filter.suitableFor")}
                </h3>
                <div className="space-y-2 text-sm text-slate-100">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.couples")}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.families")}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.businessTravelers")}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {t("exclusiveOffers.filter.soloTravelers")}
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-slate-50 text-sm font-semibold mb-3">
                  {t("exclusiveOffers.filter.destination")}
                </h3>
                <div className="space-y-2">
                  {destinationKeys.map((destinationKey) => (
                    <label
                      key={destinationKey}
                      className="flex items-center justify-between text-sm text-slate-100"
                    >
                      <span>
                        {t(`exclusiveOffers.filter.destinations.${destinationKey}`)}
                      </span>
                      <input type="checkbox" />
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <div className="bg-slate-950 border border-slate-800 shadow-card rounded-2xl p-4 md:p-6 mb-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder={t("exclusiveOffers.toolbar.searchPlaceholder")}
                      className="w-full md:w-[320px] border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sunset-400"
                    />
                    <button className="bg-sunset-500 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors">
                      {t("exclusiveOffers.toolbar.search")}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-300 text-sm">
                      {t("exclusiveOffers.toolbar.sort")}
                    </span>
                    <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sunset-400">
                      <option>{t("exclusiveOffers.toolbar.sortRecommended")}</option>
                      <option>{t("exclusiveOffers.toolbar.sortHighestRated")}</option>
                      <option>{t("exclusiveOffers.toolbar.sortLowestPrice")}</option>
                      <option>{t("exclusiveOffers.toolbar.sortHighestStars")}</option>
                      <option>{t("exclusiveOffers.toolbar.sortNearest")}</option>
                    </select>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mt-4">
                  {t("exclusiveOffers.toolbar.resultsCount")}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {offers.map((offer) => (
                  <article
                    key={offer.id}
                    className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                  >
                    <img
                      src={offer.image}
                      alt={t(`exclusiveOffers.offers.${offer.key}.title`)}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-slate-50 text-xl font-extrabold tracking-tight">
                          {t(`exclusiveOffers.offers.${offer.key}.title`)}
                        </h3>
                        <span className="text-sunset-500 text-sm font-semibold">
                          {offer.rating}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm mb-3">
                        {t("exclusiveOffers.offer.startingFrom")}{" "}
                        <span className="text-slate-50 font-bold">
                          {offer.price}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {offer.tagKeys.map((tagKey) => (
                          <span
                            key={`${offer.id}-${tagKey}`}
                            className="bg-slate-900 text-slate-300 text-xs px-2 py-1 rounded-full"
                          >
                            {t(`exclusiveOffers.offers.${offer.key}.tags.${tagKey}`)}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href="/en/contactus"
                          className="flex-1 text-center border-2 border-brand-600 text-brand-600 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-brand-50 transition-colors"
                        >
                          {t("exclusiveOffers.offer.book")}
                        </a>
                        <a
                          href="https://wa.me/966541272537"
                          className="flex-1 text-center bg-sunset-500 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors"
                        >
                          {t("exclusiveOffers.offer.contact")}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="border-2 border-brand-600 text-brand-600 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors">
                  {t("exclusiveOffers.pagination.viewMore")}
                </button>
                <p className="text-slate-300 text-sm mt-3">
                  {t("exclusiveOffers.pagination.showing")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
