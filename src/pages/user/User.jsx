import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { TitleContainer, PageContainer } from '../../core/layout/components';
import { FilterContainer } from './style';
import { Input } from '../../components';
import HttpClient from '../../core/http/HttpClient';
import HttpRequest from '../../core/http/request/HttpRequest';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData('Richard Scheid', 'email', 'Sim')];

const User = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const response = await HttpClient.request(
        HttpRequest({ url: '/users', method: 'get' })
      );
      setUsers(response.data);
    }
    loadUsers();
  });

  return (
    <>
      <TitleContainer title={t('menu.user.title')} />

      <PageContainer>
        <FilterContainer>
          <Input label={t('terms.user')} />
          <Input label={t('terms.email')} />
        </FilterContainer>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Ativo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageContainer>
    </>
  );
};

export { User };
