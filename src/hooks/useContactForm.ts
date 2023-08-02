import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const validation = z.object({
  email: z.string().email("Email invalide."),
  subject: z.string().min(1, "Ce champ est requis."),
  message: z.string().min(1, "Ce champ est requis."),
})

type ValidationSchema = z.infer<typeof validation>

const useContactFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validation),
  })

  const onSubmit = async (data: ValidationSchema) => {
    const response = await fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log(result)
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useContactFrom
