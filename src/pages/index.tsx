import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header, Hero, Modal, Row, SubscriptionPlan } from "src/components";
import { getList } from "src/helpers/lists";
import { IMovie, MyList, Product } from "src/interfaces/app.interface";
import { API_REQUEST } from "src/services/api.service";
import { useInfoStore } from "src/store";
export default function Home({ trending, topRated, tvTopRated, popular, documentary, comedy, family, history, products, subscription, list }: HomeProps): JSX.Element {
  const { modal } = useInfoStore();
  if (!subscription.length) return <SubscriptionPlan products={products} />;
  return (
    <div className={`relative min-h-screen ${modal && "!h-screen overflow-hidden"}`}>
      <Head>
        <title>D Movies | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" as="image" />
      </Head>
      <Header />
      <main className="pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <section>
          <Row title="Top Rated" movies={topRated} />
          <Row title="TV Show" movies={tvTopRated} isBig={true} />
          {list.length && <Row title="My List" movies={list} />}
          <Row title="Popular" movies={popular} />
          <Row title="Documentary" movies={documentary} />
          <Row title="Comedy" movies={comedy} isBig={true} />
          <Row title="Family" movies={family} />
          <Row title="History" movies={history} />
        </section>
      </main>
      {modal && <Modal />}
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ req }) => {
  const user_id = req.cookies["d-movie-user-token"];
  if (!user_id) return { redirect: { destination: "/auth", permanent: false } };
  const [trending, topRated, tvTopRated, popular, documentary, comedy, family, history, products, subscription] = await Promise.all([
    fetch(API_REQUEST.trending).then((res) => res.json()),
    fetch(API_REQUEST.top_rated).then((res) => res.json()),
    fetch(API_REQUEST.tv_top_rated).then((res) => res.json()),
    fetch(API_REQUEST.popular).then((res) => res.json()),
    fetch(API_REQUEST.documentary).then((res) => res.json()),
    fetch(API_REQUEST.comedy).then((res) => res.json()),
    fetch(API_REQUEST.family).then((res) => res.json()),
    fetch(API_REQUEST.history).then((res) => res.json()),
    fetch(API_REQUEST.products).then((res) => res.json()),
    fetch(`${API_REQUEST.subscription}/${user_id}`).then((res) => res.json()),
  ]);
  const myList: MyList[] = await getList(user_id);
  return { props: { trending: trending.results, topRated: topRated.results, tvTopRated: tvTopRated.results, popular: popular.results, documentary: documentary.results, comedy: comedy.results, family: family.results, history: history.results, products: products.products.data, subscription: subscription.subscription.data, list: myList.map((e) => e.product) } };
};
interface HomeProps {
  trending: IMovie[];
  topRated: IMovie[];
  tvTopRated: IMovie[];
  popular: IMovie[];
  documentary: IMovie[];
  comedy: IMovie[];
  family: IMovie[];
  history: IMovie[];
  products: Product[];
  subscription: string[];
  list: IMovie[];
}
