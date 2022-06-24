import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/leo22ca.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Leonardo Hornig</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time title='24 de Junho às 11:17h' dateTime='2022-05-11 11:17:30'>Publicado há 1h</time>
            </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 
                    <p><a href="#">jane.design/doctorcare</a></p>
                    <p>
                        <a href="#">#novoprojeto </a>
                        <a href="#">#Ignite </a>
                        <a href="#">#RocketSeat </a>
                    </p>
                </div>
        </article>
    );
}