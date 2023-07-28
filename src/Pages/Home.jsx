const Home = ()=>{
    return(
    <div className="layout-wrapper landing">
        <section className="section">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">Welcome</h3>
                <p className="text-muted mb-4 ff-secondary">Tegar | tegarherlambang6@gmail.com </p>
                </div>
            </div>
            </div>
            {/* end row */}
            <div className="row text-center">
            <div className="col-lg-12">
                <div className="process-card mt-4">
                    <div className="avatar-xl icon-effect mx-auto mb-4">
                        <div className="avatar-title bg-transparent text-success rounded-circle h1">
                        <img src={process.env.REACT_APP_API_URL+'file-1690446249219.jpg'} alt className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* end container */}
        </section>
    </div>
    )
}

export default Home