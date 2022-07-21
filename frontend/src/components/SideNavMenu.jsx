import { Form, Input } from 'antd';
import PasswordSeen from '../assets/ic_password_seen.svg';
import ListBuyerHistory from './ListBuyerHistory';

const SideNavMenu = ({ menu }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const styleInput = {
        width: '15%',
        borderRadius: '0.375rem 0 0 0.375rem',
        backgroundColor: '#F9F9F9',
        height: '46px'
    }

    switch (menu) {
        case "reset":
            return (
                <div>
                    <h1 className="font-bold text-xl text-left text-dark-purple mb-6">Reset Password</h1>
                    <Form
                        name="basic"
                        wrapperCol={{
                            span: 12,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2 mb-2">Old Password</label>
                            <div className="relative flex w-full flex-wrap items-stretch mb-4">
                                <input type="password" name="old-password" className="md:w-full md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="Input your old password" />
                                <img className="pointer-events-none w-8 h-8 p-0 absolute top-1/2 transform -translate-y-1/2 right-3" src={PasswordSeen} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2 mb-2">New Password</label>
                            <div className="relative flex w-full flex-wrap items-stretch mb-4">
                                <input type="password" name="new-password" className="md:w-full md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="Input your new password" />
                                <img className="pointer-events-none w-8 h-8 p-0 absolute top-1/2 transform -translate-y-1/2 right-3" src={PasswordSeen} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2 mb-2">Confirm Password</label>
                            <div className="relative flex w-full flex-wrap items-stretch mb-4">
                                <input type="password" name="old-password" className="md:w-full md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="Confirm your new password" />
                                <img className="pointer-events-none w-8 h-8 p-0 absolute top-1/2 transform -translate-y-1/2 right-3" src={PasswordSeen} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center h-auto bg-medium-purple text-light-grey font-semibold my-4 py-2 px-4 rounded cursor-pointer">
                            <p className="ml-2 mb-0">Save</p>
                        </div>
                    </Form>
                </div>
            )
        case "history":
            return (
                <div>
                    <h1 className="font-bold text-xl text-left text-dark-purple mb-6">Order History</h1>
                    <div className="filter flex flex-row justify-start">
                        <div className="text-xs w-auto font-semibold inline-block py-1 px-2 rounded text-light-grey bg-dark-blue last:mr-0 mr-3 cursor-pointer">
                            All
                        </div>
                        <div className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue last:mr-0 mr-3 cursor-pointer">
                            In Progress
                        </div>
                        <div className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue last:mr-0 mr-3 cursor-pointer">
                            Completed
                        </div>
                        <div className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue last:mr-0 mr-3 cursor-pointer">
                            Rejected
                        </div>
                    </div>
                    <ListBuyerHistory />
                    <ListBuyerHistory />
                </div>
            )
        default:
            return (
                <div>
                    <h1 className="font-bold text-xl text-left text-dark-purple mb-6">Edit Profile</h1>
                    <Form
                        name="basic"
                        wrapperCol={{
                            span: 12,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2">Full Name</label>
                            <input type="text" name="name" className="md:w-auto md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2">Email</label>
                            <input type="email" name="email" className="md:w-auto md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="john.doe@mail.com" />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-8">
                            <label className="p-2">Phone Number</label>
                            <Input.Group compact>
                                <Input
                                    style={styleInput}
                                    defaultValue="+62"
                                />
                                <Input
                                    style={{
                                        width: '85%',
                                        borderRadius: '0 0.375rem 0.375rem 0',
                                        backgroundColor: '#F9F9F9',
                                        height: '46px'
                                    }}
                                    placeholder="81234567890"
                                />
                            </Input.Group>
                        </div>
                        <div className="flex flex-col justify-start text-left my-4">
                            <label className="text-medium-purple px-2">City</label>
                            <input type="text" name="city" className="md:w-auto md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="South Jakarta" />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="p-2">Address</label>
                            <textarea className="md:w-auto md:h-48 md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 resize-none focus:ring-gray-200" placeholder="The Breeze BSD Bumi Serpong, Banten, Indonesia"></textarea>
                        </div>
                        <div className="flex flex-row justify-center items-center h-auto bg-medium-purple text-light-grey font-semibold my-4 py-2 px-4 rounded cursor-pointer">
                            <p className="ml-2 mb-0">Save</p>
                        </div>
                    </Form>
                </div>
            )

    }

}

export default SideNavMenu;