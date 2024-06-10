const moroccanCities = [
    { value: 'casablanca', label: 'Casablanca' },
    { value: 'rabat', label: 'Rabat' },
    { value: 'marrakech', label: 'Marrakech' },
    { value: 'fes', label: 'Fès' },
    { value: 'tangier', label: 'Tanger' },
    { value: 'agadir', label: 'Agadir' },
    { value: 'meknes', label: 'Meknès' },
    { value: 'oujda', label: 'Oujda' },
    { value: 'tetouan', label: 'Tétouan' },
    { value: 'safi', label: 'Safi' },
    { value: 'sale', label: 'Salé' },
    { value: 'kenitra', label: 'Kénitra' },
    { value: 'nador', label: 'Nador' },
    { value: 'laayoune', label: 'Laâyoune' },
    { value: 'essaouira', label: 'Essaouira' },
    { value: 'berkane', label: 'Berkane' },
]

const Dropdown = ({
    selectedOption,
    onChange,
}: {
    selectedOption: any
    onChange: any
}) => {
    return (
        <div className="relative w-full flex justify-center">
            <div
                className="w-[20rem] h-16 p-4 text-lg rounded-2xl outline-none bg-black/10"
                onChange={onChange}
            >
                {selectedOption}

                <div className="h-[15rem] w-full bg-black"> helloo</div>
            </div>
        </div>
    )
}

export default Dropdown
