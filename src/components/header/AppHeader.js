import headerStyles from './header.module.css'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {

    return (
        <header className={headerStyles.header}>
            <nav className={`${headerStyles.nav} container-wrapper`}>
                <div className='flex'>
                    <div className="p-1 pt-4 pb-4 pl-5 flex">
                        <BurgerIcon type="primary" className='pr-2' />
                        <p className="text text_type_main-default pl-2">
                            Конструктор
                        </p>
                    </div>
                    <div className="p-1 pt-4 pb-4 pl-5 flex">
                        <ListIcon  type='primary'/>
                        <p className="text text_type_main-default pl-2">
                            Лента заказов
                        </p>
                    </div>
                </div>
                <div className={headerStyles.logo}>
                    <Logo />
                </div>
                <div className="p-1 pt-4 pb-4 pl-5 flex">
                    <ProfileIcon  type='primary'/>
                    <p className="text text_type_main-default pl-2">
                        Личный кабинет
                    </p>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;
