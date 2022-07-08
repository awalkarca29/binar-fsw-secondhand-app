import { NavbarLogin, SideNav, Footer, SideNavMenu } from "../components";

const profile = () => {
    return (
        <div>
            <NavbarLogin />
            {/* <Row className="flex flex-row my-24">
                <Col span="auto">
                    <SideNav
                        imgSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    />
                </Col>
                <Col span={12} className="mx-12">
                    <SideNavMenu />
                </Col>
            </Row> */}
            <SideNav />
            <Footer />
        </div>
    )
}

export default profile;