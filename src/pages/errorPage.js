import React from 'react'

export default function ErrorPage() {
  return (
    <div>    <div className='ty-page'>
      <header class="site-header ty" id="header">
        <h1 class="site-header__title" data-lead-id="ty-title">ERROR 404!</h1>
      </header>
      <div class="main-content">
        <i class="fa fa-x main-content__checkmark" id="checkmark" style={{color:"red"}}></i>
        <p class="main-content__body" data-lead-id="main-content-body">The page you're looking for simply just does not exist.</p>
      </div>
    </div></div>
  )
}
