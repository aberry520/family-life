'use client';
import styles from './page.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useWindowDimensions from '../../utils';
export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: height,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src='/familyLife-logo.png'
          alt='Family Life Church Logo'
          style={{ opacity: 0.1, height: '30em' }}
        />
      </div>
      <main
        className={styles.main}
        // style={{ background: 'red' }}
      >
        <div className={styles.description}>
          {width > 700 && (
            <>
              <div style={{ width: '20%' }}>
                <img
                  src='/familyLife-logo.png'
                  alt='Family Life Church Logo'
                  style={{ width: '4.5em' }}
                  // style={{ position: 'absolute', opacity: 0.1, zIndex: 0 }}
                />
              </div>
              <div
                style={{
                  width: '59%',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <img
                  src='/familyLife-words.png'
                  alt='Family Life Church Logo'
                  style={{ height: '5em' }}
                />
              </div>
            </>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: width > 700 ? 'flex-end' : 'center',
            }}
          >
            <a
              href='https://www.instagram.com/familylifechurchsc/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginLeft: width > 700 ? 10 : 0 }}
            >
              <img
                src='/instagram-rd-trs.png'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={'50em'}
              />
            </a>
            <a
              href='https://www.facebook.com/people/Family-Life-Church-Iva/61558998081855/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginLeft: width > 700 ? 10 : 0 }}
            >
              <img
                src='/facebook-rd-trs.png'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={'50em'}
              />
            </a>
            <a
              href='mailto:mike@familylifechurchsc.com'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginLeft: width > 700 ? 10 : 0 }}
            >
              <img
                src='/email-rd-trs.png'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={'50em'}
              />
            </a>
            {width < 700 && (
              <a
                href='https://www.google.com/maps/search/?api=1&query=2640%20Elberton%20Highway%2C%20Iva%2C%20SC%2029655'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginLeft: width > 700 ? 10 : 0 }}
              >
                <img
                  src='/navigation-rd-trs.png'
                  alt='Vercel Logo'
                  className={styles.vercelLogo}
                  width={'50em'}
                />
              </a>
            )}
          </div>
        </div>

        <div className={styles.center}>
          <h1
            style={{
              textAlign: width > 700 ? 'right' : 'center',
              fontSize: '5em',
              width: width > 700 ? '49%' : '100%',
            }}
          >
            <img
              src='/welcome.png'
              alt='Family Life Church Logo'
              style={{ width: '5em' }}
            />
            <br />
            {/* Welcome to
            <br /> */}
            Family Life
            <br />
            Church
          </h1>
          <div style={{ width: width > 700 ? '49%' : '100%' }}>
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}
            >
              <div>
                <h2>{`Mission: "By the Word of God"`}</h2>
              </div>
              <div>
                <h2>{`Vision: "Family finding life in Christ"`} </h2>
              </div>
              <div>
                <h2>
                  Church DNA: Scriptural Fidelity, Family, Theology, Simplicity,
                  Intentionality
                </h2>
              </div>
            </Carousel>
          </div>
        </div>

        <div
          // className={styles.grid}
          style={{
            height: '20%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p>Statement of faith here</p>
          <a
            href='https://www.google.com/maps/search/?api=1&query=2640%20Elberton%20Highway%2C%20Iva%2C%20SC%2029655'
            target='_blank'
          >
            Click here for map
          </a>
        </div>
      </main>
    </>
  );
}
