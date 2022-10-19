import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={`${styles.footerMain} position-absolute bottom-0 start-50 translate-middle-x`}>
            <div className='grid text-center'>
                <div className={`${styles.colFooter} row`}>
                    <div className={`${styles.colDiv} col`}>
                        <strong>Blog Project</strong>
                        <p>Made with NextJS</p>
                    </div>
                    <div className={`${styles.colDiv} col`}>
                        <strong>Contact</strong>
                        <p>marcus.v.silvaoliveira1996@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;