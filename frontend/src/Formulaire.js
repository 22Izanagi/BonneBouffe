import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Formulaire = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', data)
      alert(response.data.message)
    } catch (error) {
      console.error('Erreur réseau:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nom:</label>
        <input {...register('nom', { required: true })} />
        {errors.nom && <p>Le nom est requis</p>}
      </div>
      <div>
        <label>Prénom:</label>
        <input {...register('prenom', { required: true })} />
        {errors.prenom && <p>Le prénom est requis</p>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <p>L'email est requis</p>}
      </div>
      <div>
        <label>Adresse Postale:</label>
        <input {...register('adresse', { required: true })} />
        {errors.adresse && <p>L'adresse postale est requise</p>}
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  )
}

export default Formulaire