import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout'
import { PERSONAL_HOME, BUSINESS_HOME } from './CONSTANTS'
import { Personal, Business, NotFound } from '../pages/index'

export const RouterConfig = () => {
  const [theme, setTheme] = useState('light')
  return (
    <Routes>
      {/* List of all public routes here */}

      <Route
        exact
        path={PERSONAL_HOME}
        element={
          <Layout theme={theme} setTheme={setTheme}>
            <Personal />
          </Layout>
        }
      />
      <Route
        path={BUSINESS_HOME}
        element={
          <Layout theme={theme} setTheme={setTheme}>
            <Business />
          </Layout>
        }
      />

      {/* List a generic 404-Not Found route here */}
      <Route
        path="*"
        element={
          <Layout theme={theme} setTheme={setTheme}>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  )
}
