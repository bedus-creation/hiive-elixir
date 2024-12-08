import axios, { AxiosError } from "axios"
import React, { useState } from "react"
import { Error } from "../../components/form/Error.tsx"
import TextInput from "../../components/form/TextInput.tsx"

export function PostCreate() {
    const [formData, setFormData] = useState({ title: "", description: "" })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:4000/api/posts", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        } catch (error) {
            if (error instanceof AxiosError && error?.response?.status === 422) {
                let errors: { [key: string]: string } = {}
                Object.keys(error.response.data.errors).forEach((item: string) => {
                    errors[item] = error.response?.data.errors[item][0]
                })

                setErrors(errors)
            }
        }
    }

    return (
        <>
            <div className="container mx-auto grid grid-cols-3">
                <div className="col-span-2 my-2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label>Title:</label>
                            <TextInput
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"/>
                            <Error message={errors["title"]}/>
                        </div>
                        <div className="mb-4">
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="border w-full rounded px-2 py-1"/>
                            <Error message={errors["title"]}/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="rounded bg-green-500 px-4 py-2">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
