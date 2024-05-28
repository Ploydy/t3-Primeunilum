/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Breadcrumbs from '~/app/ui/invoices/breadcrumbs'
import Form from '~/app/ui/invoices/create-form'
import { api } from '~/trpc/server';

export default async function Create() {
  const customers = await api.data.fetchCustomers();
  return (
    <main>
    <Breadcrumbs
      breadcrumbs={[
        { label: 'Invoices', href: '/dashboard/invoices' },
        {
          label: 'Create Invoice',
          href: '/dashboard/invoices/create',
          active: true,
        },
      ]}
    />
    <Form customers={customers} />
  </main>
  )
}
