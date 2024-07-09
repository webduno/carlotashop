export const ShopSection = () => {
    return (<>
        <div className="flex-col w-100 tx-altfont-1 gap-2">
            <div>App</div>
            <div>
                <div className="flex w-100 w-max-300px ">
                    <div className="flex-1 flex-col tx-lg ">
                        <input className="px-4 py-2 bord-r-l-50" type="text" placeholder="Search" style={{
                            background: "#e6e6e4",
                            border: "1px solid #d6d6d4"
                        }} />
                    </div>
                    <div className="bord-r-r-50 flex-col opaci-chov--50 " style={{
                            background: "#e6e6e4",
                            border: "1px solid #d6d6d4"
                        }}>
                            <div className="px-3">?</div>
                            </div>
                </div>
            </div>
            <div className="flex-col gap-2">
                <div className="pa-8 bord-r-50 box-shadow-1-b"
                    style={{background: "linear-gradient(130deg, #ffffff, #efefef)"}}
                >
                    <div>
                        <div className="flex-col gap-2"> 
                            <img src="/img/article (2).png" alt="" width={300} className="bord-r-5 Q_sm_x" />
                            <img src="/img/article (2).png" alt="" width={150} className="bord-r-5 Q_xs" />
                            <div>
                                Ring #57
                            </div>
                            <div className="tx-white px-4 py-2 bord-r-10 opaci-chov--75" style={{background: "#9D7458"}}>
                                Buy
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tx-white px-8 py-2 bord-r-100 tx-center tx-altfont-1 tx-bold-8 tx-lx mt-4 opaci-chov--50" 
                    style={{
                        background: "#9D7458",
                    }}
                >
                    Checkout
                </div>
            </div>
        </div>
    </>)
}