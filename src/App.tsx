import { gql, useQuery } from '@apollo/client'

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSON_QUERY)

  return (
    <div className="p-4">
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}> {lesson.title} </li>
      })}
    </div>
  )
}

export default App
