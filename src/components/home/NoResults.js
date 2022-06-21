import React from 'react'
import styles from './noResults.module.scss'
import illustration from '../../images/jobHunt.png'

export const NoResults = () => {
  return (
    <div className={styles.noResultsContainer}>
        <div className={styles.imageWrap}>
            <img src={illustration} alt="job hunt" />
        </div>
        <div className={styles.text}>
            <h1>We couldn't find any jobs matching your search criteria</h1>
            <p>Change your search parameters and try again</p>
        </div>
    </div>
  )
}
