import styles from '../../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <h2>Blog project</h2>
      <hr/>
      <p>Wellcome, here you will see some features from NextJS. This project is my first deep contact with NextJS framework, so i started learning some
        cool stuffs from the framework.
      </p>
      <p>This is a study project made with NextJS.</p>

      <br />
      <section className={`${styles.section_home}`}>
        <h6>#Features in this study project:</h6>
        <ul>
          <li>Server Side Rendering (SSR)</li>
          <li>Incremental Side Rendering (ISR)</li>
          <li>On-demand Revalidation</li>
          <li>Middleware</li>
        </ul>
      </section>

      <br />
      <br />
      <section className={`${styles.section_home}`}>
        <h5>Server Side Rendering (SSR)</h5>
        <p>
          Pages configured with SSR can be usefull to fetch API requests and generate HTML content from the server side before it returns
          to the interface. SSR runs a special function to fetch API request on every page request before the content returns to the user.
        </p>
      </section>

      <br />
      <section className={`${styles.section_home}`}>
        <h5>Incremental Side Rendering (ISR)</h5>
        <p>
          Combination of <a href='https://nextjs.org/docs/basic-features/data-fetching/get-static-props' target={'_blank'} rel="noreferrer">SSG</a> and SSR,
          ISR generates a static pre-rendered HTML from pages at buid time like SSG, but different from SSG, ISR can rebuild pages at runtime
          in a certian condition or time configured in the application.
        </p>
      </section>
    </div>
  )
}
