export default function LoginPage() {
    return (
        <main className="bg-white flex flex-col h-screen">
            <div className="m-auto">
                {/* replace with our logo */}
                {/* <div className="h-8 flex justify-center mb-8">
                    <img className="w-8 mr-2" src="../favicon.ico" alt="" />
                </div> */}
                <div className="flex flex-col rounded-lg outline outline-2 outline-slate-300 mx-auto p-8 gap-4">
                    <div className="flex flex-row text-black font-bold text-2xl items-center my-auto">
                        <h1>Login</h1>
                    </div>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col text-black">
                            <input required className="outline outline-slate-300 rounded-lg outline-1 p-4" placeholder="Username"></input>
                        </div>
                        <div className="flex flex-col text-black">
                            <input required className="outline outline-slate-300 rounded-lg outline-1 p-4" type="password" placeholder="Password"></input>
                        </div>
                        <input value="Login" type="submit" className="hover:bg-orange-600 hover:transition transition bg-orange-400 text-white outline-slate-300 outline outline-1 rounded-lg  p-2" />
                    </form>
                </div>
            </div>
        </main>
    )
}
