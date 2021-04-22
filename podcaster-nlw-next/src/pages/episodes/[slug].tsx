import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { api } from '../../services/api'

export default function Episode() {
  const router = useRouter();

  return (
    <h1>{router.query.slug}</h1>
  )

};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/episodes/${slug}`)

  return {
    props: {},
    revelidate: 60 * 60 * 24,
  }
}
