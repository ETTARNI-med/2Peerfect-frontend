export interface formInfoType {
    email: string
    firstName: string
    lastName: string
    password: string
    city: string
    country: string
    phoneNumber: string
    yearsOfExperience: number
    online: boolean
    professor: boolean
}

const handleSubmitLoginForm = async (form: formInfoType) => {
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
    })

    if (!response.ok) {
        console.error('Error submitting form:', response.statusText)
        return
    } else {
        console.log('data sent successfully', response.body)
    }
}

export default handleSubmitLoginForm
