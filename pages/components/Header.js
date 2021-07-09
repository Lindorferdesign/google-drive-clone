import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";


function Header() {
    return (
        <div className="flex items-center">
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
            <h1 className="hidden md_inline-flex ml-2 text-gray-700">Docs</h1>
            <div className="flex flex-grow items-center px-5 py-2">
                 <Icon name="search" size="3xl" color="gray" />
                 <input type="text" placeholder="search" />
            </div>
        </div>
    )
}

export default Header
