"use client"
import useContactFrom from "@/hooks/useContactForm"
import { IconLoader, IconSend } from "@tabler/icons-react"

function ContactSection() {
  const { register, handleSubmit, onSubmit, errors, sent, isLoading } =
    useContactFrom()

  return (
    <section id="contact" className="py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Me contacter
        </h2>
        <hr className="w-6 h-1 mx-auto mt-4 mb-10 bg-teal-500 border-0 rounded" />
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          N&apos;hésitez pas à me contacter via ce formulaire!
          <br />
          Je vous répond au plus vite 😊
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {sent && (
            <p className="text-green-700 text-center w-full">
              Votre demande de contact a bien été envoyée.
            </p>
          )}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              placeholder="Adresse e-mail"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-600 p-2 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sujet
            </label>
            <input
              type="text"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              placeholder="Sujet"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <p className="text-red-600 p-2 text-sm">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Votre message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 p-2 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 flex gap-2 items-center"
          >
            {isLoading ? <IconLoader className="animate-spin" /> : <IconSend />}
            Envoyer
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
