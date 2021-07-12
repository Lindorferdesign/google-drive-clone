import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";


function Header() {
    return (
        <div className="sticky top-0 z-50 flex flex-grow items-center px-4 py-2">
            <Button
                color="gray"
                buttonType="outline"
                rounde={true}
                iconONly={true}
                riipple="dark"
                className="h-20 w-20 border-0"
                >
                    <Icon name="menu" size="3xl" />
            </Button>
            <Icon name="description" size="5xl" color="blue" />
            <h1 className="mx-5 md:mx-20 hidden md_inline-flex ml-2 text-gray-700">Docs</h1>
            <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md hover:shadow-md">
                 <Icon name="search" size="3xl" color="gray" />
                 <input type="text" placeholder="search" className="flex-grow px-5 text-base bg-transparent outline-none"/>
            </div>

            <Button
                color="gray"
                buttonType="outline"
                rounde={true}
                iconONly={true}
                riipple="dark"
                className="ml-5 md:ml-20 h-20 w-20 border-0"
                >
                    <Icon name="apps" size="3xl" color="gray" />
            </Button>
            <img 
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2 hover:shadow-lg"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGKLAIFaQeV0w/profile-displayphoto-shrink_100_100/0/1584210740494?e=1631145600&v=beta&t=2saQ62DcZDwfjqci9zzgBlOAgkQFlxHZjSQNqiOTHtU"
                alt="account-img"
            ></img>

        </div>
    )
}

export default Header
