import React from 'react'
import Header from '../../components/Header/Header'
import Modal from '../../components/Header/Header'
import AddExercise from '../../components/ADD/Exercise/AddExercise'
import { BiPlus } from 'react-icons/bi'
import AddExerciseToType from '../../components/ADD/Exercise/AddExerciseToType'
import { Toaster } from 'react-hot-toast'
import { useAllExerciseData } from '../../hook/useAllExerciseData'
import AddType from '../../components/ADD/Exercise/AddType'
import { Delete } from '@mui/icons-material'
import { useDeleteExercise } from '../../hook/useDeleteExercise'

const Exercises = () => {

  const { data: allExercise } = useAllExerciseData()

  const { mutate: deleteExercise } = useDeleteExercise()

  const handleDelete = (exerciseID) => {
    deleteExercise(exerciseID);  // Pass exerciseID directly
  };

  return (
    <>
      <div className='px-4 w-auto '>
        {/* <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl drop-shadow-xl'> */}
        <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl max-h-34 overflow-y-scroll'>
          <div className='flex justify-between items-center sticky top-0 z-10 bg-white'>
            <Header category="Page" title='Exercise' />
            <Modal buttonContent={<div className='w-36 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Exercise</span></div>} numStyle='one'>
              <AddExercise />
            </Modal>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            {allExercise?.map((exercise) => {
              return <>
                <div key={exercise.id} className='border-2 border-black rounded-xl flex'>
                  <img src={`https://142c-89-39-107-204.ngrok-free.app/Uploads/${exercise.gif}`} alt="Exercise" className='w-48 h-48 m-4 border-1 border-gray-500 rounded-xl ' />
                  <div className='flex justify-between'>
                    <a href="#MealDelete" className="no-underline text-blue-600"
                      // onClick={() => console.log(`Meal ID: ${exercise.id}`)}
                      onClick={() => handleDelete(exercise.id)}  // Call handleDelete with exercise.id

                    >
                      <Delete className='text-red-500' />
                      <p>{exercise.id}</p>
                    </a>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='mt-8 border-r-1 ml-1 border-gray-600 h-40 mr-8'>
                      <p className='text-xl mb-5'><span className='font-extrabold'> Name : </span> {exercise.exercise_name}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>Calories :</span> {exercise.calories}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>time :</span> {exercise.time}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'> Reps : </span> {exercise.reps}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'> Gender : </span> {exercise.gender}</p>
                    </div>
                    <div className='mt-10 pr-3 '>
                      <p className='text-xl mb-5'><span className='font-extrabold'>Target :</span> {exercise.target}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>disease :</span> {exercise.diseases}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'> level : </span> {exercise.level}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>choose :</span> {exercise.choose}</p>
                    </div>
                  </div>
                </div>
              </>
            })}

            <div>

            </div>
          </div>
        </div>
      </div>


      <div className='px-4 w-auto '>
        {/* <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl drop-shadow-xl'> */}
        <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl '>
          <div className='flex justify-between items-center'>
            <Header category="Page" title='Exercise Type' />
            <Modal buttonContent={<div className='w-36 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Exercise to</span></div>} numStyle='one'>
              <AddExerciseToType />
            </Modal>
          </div>

        </div>
      </div>

      <div className='px-4 w-auto '>
        {/* <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl drop-shadow-xl'> */}
        <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl '>
          <div className='flex justify-between items-center'>
            <Header category="Page" title=' Type' />
            <Modal buttonContent={<div className='w-36 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Type</span></div>} numStyle='one'>
              <AddType />
            </Modal>
          </div>

        </div>
      </div>
      <Toaster position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }} />
    </>
  )
}

export default Exercises