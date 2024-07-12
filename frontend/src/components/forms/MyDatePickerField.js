import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function MyDatePickerField(props) {
    const { label, width, control, name } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                        sx={{ width: { width } }}
                        label={label}
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
