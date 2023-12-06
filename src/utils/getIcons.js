import night from '../icons/01n.svg';
import day from '../icons/01d.svg';
import partlycloudyday from '../icons/02d.svg'
import partlycloudynight from '../icons/02n.svg'
import cloudy from '../icons/03d.svg';
import rainy from '../icons/09d.svg';
import rainyday from '../icons/10d.svg';
import rainynight from '../icons/10n.svg';
import thunder from '../icons/11d.svg';
import snow from '../icons/13d.svg';
import mist from '../icons/50d.svg';

export const getIcon = (icon) => {
if (icon === '01n')
return night;
if (icon === '01d') {
    return day;
}
if (icon === '02n') {
    return partlycloudynight;
}
if (icon === '02d') {
    return partlycloudyday;
}
if (icon === '03n' || '03d' || '04d' || '04n') {
    return cloudy;
}
if (icon === '09d' || '09n') {
    return rainy;
}
if (icon === '10d') {
    return rainyday;
}
if (icon === '10n') {
    return rainynight;
}
if (icon === '11n' || '11d') {
    return thunder;
}
if (icon === '13n' || '13d') {
    return snow;
}
if (icon === '50n' || '50d') {
    return mist;
}
}