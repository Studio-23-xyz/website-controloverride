const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      );
}
export default PageLoader;