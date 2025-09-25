function Number({ number }) {
  return (
    <div className="border-2 border-primary rounded-full h-7 w-7 flex justify-center items-center">
      <p className="text-primary text-center font-bold text-lg">
        {number}
      </p>
    </div >
  )
}

export default Number