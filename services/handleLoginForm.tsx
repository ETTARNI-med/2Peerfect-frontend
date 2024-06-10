interface props {
    email: string
    password: string
}

const handleSubmitLoginForm = async (form: props) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.email + form.password),
    })

    if (!response.ok) {
        console.error('Error submitting form:', response.statusText)
        return
    } else {
        console.log('data sent successfully', response.body)
    }
}

export default handleSubmitLoginForm
