import dynamic from 'next/dynamic';
import Image from 'next/image'
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'


async function getWARNNotices(state: String) {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const resultList = await pb.collection('Companies').getList(1, 50, {
    filter: `State = "${state}"`,
  });
  return resultList;
}

export default async function Home() {
  const layoffs = await getWARNNotices("Tennessee");
  return (
    <div>
      <h1>How are you</h1>
      <div>
        {layoffs?.map((layoff) => {
          return <Layoff key={layoff.Layoff_Date} layoff={layoff}/>;
        })}
      </div>
    </div>
  );
}

function Layoff({ layoff }: any) {
  const  { State, Company, County, Date_Posted, Layoff_Date, created} = layoff || {};

  return (
    <div>
      <h1>{Company}</h1>
      <h1>{County}</h1>
      <h1>{Date_Posted}</h1>
      <h1>{Layoff_Date}</h1>
    </div>
  );
}