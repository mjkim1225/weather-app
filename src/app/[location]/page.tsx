
import HomeBtn from "../components/HomeBtn"
import { getForecast } from "../utils/getForecast"

/**
 * 이벤트가 들어가는 행위자체가 서버컴포넌트가 할 수 없다. 
 * onClick 이벤트 같은게 있으면 무조건 클라이언트 컴포넌트가 되어야한다.
 */
type Props = {
  params: {
      location: string
  },
  searchParams: {
    name: string
  }
}


/**
 * 동적으로 메타데이터 만들기
 * 컴포넌트함수가 받는 props를 동일하게 받을 수 있다.
 */
export function generateMetadata({params, searchParams} : Props) {
  return {
    title: `${searchParams.name}의 날씨`,
    description: `${params.location}의 날씨를 알려드립니다.`
  }
}

export default async function Detail( {params} : Props) {
  const name = (
    params.location === 'seoul' ? '서울' :
    params.location === 'NYC' ? '뉴욕' :
    params.location === 'london' ?  '런던' : ''
  )

  const res = await getForecast(params.location);

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map(day => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeBtn />
    </>
  )
}
  