interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className='bg-slate-500 w-18 h-10 m-2 text-lg text-sky-900 rounded flex items-center justify-center'>Habit = {props.completed}</div>
    )
}