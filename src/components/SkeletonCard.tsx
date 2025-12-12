const SkeletonCard = () => {
  return (
    <div className='col-md-4 mb-4'>
      <div className='card h-100'>
        <div style={{ height: 200 }} className='skeleton' />
        <div className='card-body'>
          <div className='mb-2 skeleton' style={{ height: 20, width: '60%' }} />
          <div className='mb-2 skeleton' style={{ height: 16, width: '40%' }} />
          <div className='mt-3 skeleton' style={{ height: 36, width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;