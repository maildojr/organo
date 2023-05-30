import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
            <ul>
                <li>
                    <a href="facebook.com" target='_blank'>
                        <img src="/images/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target='_blank'>
                        <img src="/images/tw.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target='_blank'>
                        <img src="/images/ig.png" alt="" />
                    </a>
                </li>
            </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Maildo Junior
                </p>
            </section>
        </footer>
    )
}

export default Footer