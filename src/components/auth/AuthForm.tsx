import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchMockData } from '@/store/auth/actions';
import { getValidationError, getValidationStatus } from '@/store/auth/selector';
import { setLoggedInStatusThunk } from '@/store/auth/actions';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';
import { useValidation } from '@/hooks/useValidation';

import { authHeader, hideBtn, submitBtn } from './authStyles';

export type SignInForm = {
  Login: string;
  Password: string;
};

type Props = {
  handleCloseModal: () => void;
};

export const AuthForm = (props: Props) => {
  const { handleCloseModal } = props;

  const { t } = useTranslation();

  const { loginValidation, passwordValidation } = useValidation();

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { handleSubmit, control, setFocus, register } = useForm<SignInForm>();
  const { errors } = useFormState({
    control,
  });

  useEffect(() => {
    setFocus('Login');
  }, [setFocus]);

  const status = useAppSelector(getValidationStatus);

  const errorRequest = useAppSelector(getValidationError);

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    dispatch(fetchMockData(data))
      .unwrap()
      .then(() => {
        dispatch(setLoggedInStatusThunk(true));
        navigate('/profile');
        handleCloseModal();
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Box sx={authHeader}>
        <Typography variant="h4" component="div">
          {t('signIn')}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom={true}>
          {t('toGetAccess')}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="Login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              {...register('Login')}
              label={t('login')}
              size="small"
              margin="normal"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.Login?.message || !!errorRequest}
              helperText={
                errors.Login?.message ||
                (errorRequest && `${t('errorRequestUser')}`)
              }
            />
          )}
        />

        <Controller
          control={control}
          name="Password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              type={showPassword ? 'text' : 'password'}
              label={t('password')}
              size="small"
              margin="normal"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.Password?.message || !!errorRequest}
              helperText={
                errors.Password?.message ||
                (errorRequest && `${t('errorRequestUser')}`)
              }
            />
          )}
        />
        <Button onClick={handleShowPassword} size="small" sx={hideBtn}>
          {showPassword ? `${t('hide')}` : `${t('show')}`}
        </Button>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          disabled={status === 'loading' ? true : false}
          sx={submitBtn}
        >
          {status === 'loading' ? `${t('loading')}...` : `${t('signIn')}`}
        </Button>
      </form>
    </div>
  );
};
