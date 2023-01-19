import { Link, useLocation, useParams } from 'react-router-dom';
import { useFetchArticlesByIdQuery } from 'Redux/Articles/articlesOperations';

export const ArticleDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data } = useFetchArticlesByIdQuery(id);

  return (
    <>
      {data && (
        <>
          <img src={`${data.imageUrl}`} alt={`${data.title}`} />
          <h1>{data.title}</h1>
          <p>
            {data.summary}. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Earum totam accusamus ad rem architecto tempore asperiores
            rerum deleniti expedita magni eius quidem dolorum qui adipisci fuga
            dolor, doloremque ab! Amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quo nemo voluptates corrupti minus
            magni iure suscipit laborum, ullam consequatur eveniet neque placeat
            facere hic, harum architecto. Iusto, tempore assumenda. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Earum totam accusamus
            ad rem architecto tempore asperiores rerum deleniti expedita magni
            eius quidem dolorum qui adipisci fuga dolor, doloremque ab! Amet
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quo nemo voluptates corrupti minus magni iure suscipit laborum,
            ullam consequatur eveniet neque placeat facere hic, harum
            architecto. Iusto, tempore assumenda. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Earum totam accusamus ad rem
            architecto tempore asperiores rerum deleniti expedita magni eius
            quidem dolorum qui adipisci fuga dolor, doloremque ab! Amet Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo
            nemo voluptates corrupti minus magni iure suscipit laborum, ullam
            consequatur eveniet neque placeat facere hic, harum architecto.
            Iusto, tempore assumenda. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Earum totam accusamus ad rem architecto tempore
            asperiores rerum deleniti expedita magni eius quidem dolorum qui
            adipisci fuga dolor, doloremque ab! Amet Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium quo nemo voluptates
            corrupti minus magni iure suscipit laborum, ullam consequatur
            eveniet neque placeat facere hic, harum architecto. Iusto, tempore
            assumenda.
          </p>
          <Link to={location.state.from}> Go back</Link>
        </>
      )}
    </>
  );
};
