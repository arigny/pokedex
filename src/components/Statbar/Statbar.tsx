import './Statbar.css';

export const Statbar = ({value}: any) => {
  // max value for each stat is 255
  const percent = (value / 255) * 100;

  const fillerStyles = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 'inherit',
    transition: 'width 0.3s ease-in-out',
  }

  return (
    <div className="container">
      <div style={fillerStyles} />
    </div>
  )
}
