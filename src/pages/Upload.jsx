import UploadForm from "../components/UploadForm"

function UploadPage() {
    return (
        <>
        <header style={{textAlign: 'center'}}>
            <h1 style={{color: 'white', marginTop: '20px', paddingLeft: '1rem'}}>Sube una película</h1>
        </header>
            <UploadForm></UploadForm>
        </>
    )
}

export default UploadPage