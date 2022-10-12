
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import Notfoum from './components/NotFound/Notfoum';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/home/:quizId',
          loader:({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:'*',
      element: <Notfoum></Notfoum>
    }
        
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
