import React from 'react'
import AuthButton from '../../../components/AuthButton'
import sparkles from '../../../assets/images/sparkles.svg'

export const Auth = () => {
  return (
    <div className="authBtn">
      <AuthButton type="submit" text={'Login'} className={'login'} />
      <AuthButton
        type="submit"
        text={'Get started'}
        className={'signup'}
        icon={sparkles}
      />
    </div>
  )
}
