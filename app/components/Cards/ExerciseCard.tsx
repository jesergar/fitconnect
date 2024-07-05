import { IExercise, exercises } from "@/models/Exercise"

export function ExerciseCard({ exerciseId, reps, series }: { exerciseId: string, reps: number | string, series: number }) {
    const exercise = exercises.find(exercise => exercise.id === exerciseId) as IExercise
  
    return (
      <div className='flex flex-row border-2 rounded-xl overflow-hidden w-[600px] h-[100px]'>
        <div className='w-[100px] h-[100px] flex'>
          <img src={`/exercises/${exercise.photo}`} alt={`Imagen de ${exercise.title}`} className=' object-fit' />
        </div>
        <h3>{exercise.title}</h3>
        <p>Series: {series}</p>
        <p>Reps:{ reps}</p>
      </div>
    )
  }
  
  