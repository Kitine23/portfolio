import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const validation = z.object({
  email: z.string().email("Email invalide."),
  subject: z.string().min(1, "Ce champ est requis."),
  message: z.string().min(1, "Ce champ est requis."),
})

type ValidationSchema = z.infer<typeof validation>

const useContactFrom = () => {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    reset,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validation),
  })

  const onSubmit = async (data: ValidationSchema) => {
    setIsLoading(true) // state pour afficher un indicateur de chargement
    const response = await fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    setIsLoading(false)

    if (!response.ok) {
      setError("root", {
        message:
          response.status === 422 ? "Champs invalides." : "Erreur du serveur.",
      })
      return
    }

    const result = await response.json()

    if (result?.error) {
      setError("root", { message: "Erreur du serveur." })
      return
    }

    setSent(true)
    reset() // vide les champs du formulaire
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    sent,
    isLoading,
  }
}

export default useContactFrom
