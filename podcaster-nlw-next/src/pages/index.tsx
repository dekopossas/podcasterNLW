import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';

type Episode = {
  id: string;
  title: string;
  members: string;
  published_at: string;
};

type HomeProps = {
  episodes: Episode[];
};

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{}</p>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes',{
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    }
  })

  const episodes = data.map(episodes => {
    return {
      id: episodes.id,
      title: episodes.title,
      thumbnail: episodes.thumbnail,
      members: episodes.members,
      publishedAt: format(parseISO(episodes.published_at), 'd MMM yy', { locale: ptBR })
    };
  });

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
};
