import React from 'react';
import moment from 'moment'
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  padding: 0,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({
  open,
  handleClose,
  detail,
}) {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <Card sx={{ ...style, width: 400 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='340'
            image={detail?.image ? detail?.image : 'https://assets.stickpng.com/thumbs/58f37731a4fa116215a92411.png'}
            alt={detail?.name}
          />
          <CardContent>
            <Typography variant='h5'>
              <strong>{detail?.name}</strong>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>ID:</strong> {detail?.id}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>Creacion:</strong> {moment(detail?.created).format('LLLL')}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>Genero:</strong> {detail?.gender}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>Especie:</strong> {detail?.species}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>Estatus:</strong> {detail?.status}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>Tipo:</strong> {detail?.type}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Modal>
  );
}
