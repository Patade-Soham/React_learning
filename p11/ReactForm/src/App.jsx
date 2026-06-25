import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" type="text" {...register('firstName')} />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" type="text" {...register('lastName', 
            {required:true,
            maxLength:7,
            minLength:{value:3,message:'min val 3'}
            })} />
            {errors.lastName && <p>{errors.lastName.message} </p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email')} />
        </div>
        <button type="submit">Submit</button>
      </form>
 
    </div>

  )
}

export default App
