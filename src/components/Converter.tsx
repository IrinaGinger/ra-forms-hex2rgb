import { useState } from 'react';
import { hex2Rgb } from '../hex2rgb.tsx';

import './Converter.css';

export const Converter = () => {
    const [form, setForm] = useState({ hexValue: '', rgbValue: '', rgbText: '', textColor: '#ffffff' });
    let validValue: string = '';
    let color: string = '';

    document.body.style.backgroundColor = form.rgbValue;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;

        setForm(prev => ({ ...prev, hexValue: value }));

        if (/^#[\dA-Fa-f]{6}$/.test(value)) {
            validValue = hex2Rgb(value);            
            if (value === '#ffffff') {
                color = '#000000';
            } else {
                color = '#ffffff';
            }
            setForm(prev => ({ ...prev, rgbValue: validValue, rgbText: validValue, textColor: color }));
        } else if (value.length >= 7) {
            setForm(prev => ({ ...prev, rgbValue: `rgb(233, 68, 47)`, rgbText: 'Ошибка!', textColor: '#ffffff' }));
        }
    }

    return (
        <>
            <form className="form">
                <label htmlFor="hexValue" className="hidden">Введите цвет в hex-формате</label>
                <input
                    className="input-field"
                    type="text"
                    name="hexValue"
                    autoComplete="off"
                    autoFocus
                    defaultValue={form.hexValue}
                    onChange={handleChange}
                />
            </form>
            <div className="output-field" style={{ backgroundColor: form.rgbValue }}>
                <span className="output-field-text" style={{ color: form.textColor }}>
                    {form.rgbText}
                </span>
            </div>
        </>
    );
}