import React,{ useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

import pedidoContext from '../../context/pedido/pedidoContext';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const PedidoContext = useContext(pedidoContext);
  const { pedidosPendientes, getPendingOrder } = PedidoContext;

  useEffect (() => {
    getPendingOrder()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <Title>Ordenes Pendientes</Title>
      <Typography component="p" variant="h4" className="mt-3 text-red-500">
        {pedidosPendientes}
      </Typography>
      <Typography color="textSecondary" className={`${classes.depositContext} mt-5`}>
        {  new Date().toLocaleDateString() }
      </Typography>
    </React.Fragment>
  );
}